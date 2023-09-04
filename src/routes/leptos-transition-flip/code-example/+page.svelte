<script>
	import { onMount } from 'svelte';
  import CodeBlock from '../../CodeBlock.svelte';

  onMount(() => {
    if (window?.Prism) {
      window.Prism.highlightAll();
    }
  });
</script>

<div class="flex flex-row justify-center items-center">
  <h1 class="text-3xl">Full leptos_transition_flip example</h1>
</div>

<div class="mx-40">
  <CodeBlock lang="language-rust">
    {`
  use leptos::{
      html::{Div, ElementDescriptor},
      leptos_dom::console_log,
      *,
  };
  use leptos_transition_flip::prepare_flip;
  use std::{collections::HashMap, time::Duration};

  // Struct to contain all the useful information. As we will need to identify each
  // node_ref, we use an usize as a simple key. The ID needs to be
  // Hash + Eq + Clone + Display. Display is necessary for showing errors.
#[derive(Clone)]
  struct ListItem<V>
  where
      V: ElementDescriptor + 'static,
  {
      id: usize,
      text: String,
      node_ref: NodeRef<V>,
  }

  // Example component that does nothing beyond cosmetics. Two lists of elements
  // that can transition among them.
#[component]
  fn App(cx: Scope) -> impl IntoView {
      // A node_ref is necessary for an ancestor component to be the DOM reflow target.
      // This node_ref needs to be reference a Div.
      let reflow_target = create_node_ref(cx);

      let texts = vec!["One", "Two", "Three"];

      // List that houses all the transitioning items.
      let (items, _set_items) = create_signal(
          cx,
          texts
              .into_iter()
              .enumerate()
              .map(|(index, text)| {
                  create_signal(
                      cx,
                      ListItem {
                          id: index,
                          text: text.to_string(),
                          node_ref: create_node_ref::<Div>(cx),
                      },
                  )
              })
              .collect::<Vec<_>>(),
      );

      // Left list that starts with all the elements.
      let (left_items, set_left_items) = create_signal(cx, items());

      // Empty right list
      let (right_items, set_right_items) = create_signal(cx, Vec::new());

      view! { cx,
          <div node_ref=reflow_target class="w-[100vw] h-[100vh] bg-blue-200 flex justify-around items-center">
              <div class="flex justify-around items-center flex-col">
                  <For
                      each=left_items
                      key=move |(item, _)| item().id
                      view=move |cx, (item, _)| {
                          let node_ref = item().node_ref;

                          let move_item_right = move |_| {
                              let id = item().id;

                              // A HashMap is utilized to map the keys to node_refs.
                              let ids_to_node_refs = items()
                                      .into_iter()
                                      .map(|(item, _)| item())
                                      .map(|ListItem { id, node_ref, .. }| (id, node_ref))
                                      .collect::<HashMap<_, _>>();

                              // This is the leptos_transition_flip crate's function. It receives the
                              // aformentioned mapping, the node_ref of the reflow target, and,
                              // finally, the transition property to be set for the target HTML
                              // elements in FLIPping.
                              let (flip, clear) = prepare_flip(
                                  ids_to_node_refs,
                                  reflow_target,
                                  "transform 0.6s".to_string()
                              ).unwrap();

                              // Get item that will be removed>
                              let item = left_items().into_iter().filter(|(i, _)| i().id == id).next().unwrap();

                              // Remove item from left list.
                              set_left_items.update(|items| {
                                  let position = items.iter().position(|(i, _)| i().id == id).unwrap();

                                  items.remove(position);
                              });

                              // Push item into right list.
                              set_right_items.update(|items| {
                                  items.push(item);
                              });


                              // Do FLIP.
                              match flip().map_err(|err| format!("An error has occurred when attempting a FLIP: {err}")) {
                                  Ok(()) => (),
                                  Err(err) => console_log(&err)
                              }

                              // Clear styles after timeout.
                              set_timeout(|| {
                                  match clear().map_err(|err| format!("An error has occurred when attempting to clear the elements' transition styles: {err}")) {
                                      Ok(()) => (),
                                      Err(err) => console_log(&err)
                                  }
                              }, Duration::from_millis(600));
                          };

                          view! { cx,
                              <div node_ref=node_ref class="bg-green-200 my-2 w-[10vw] flex justify-center items-center" on:click=move_item_right>
                                  <span>
                                      {move || item().text}
                                  </span>
                              </div>
                          }
                      }
                  />
              </div>

              <div class="flex flex-col justify-around items-center">
                  <For
                      each=right_items
                      key=move |(item, _)| item().id
                      view=move |cx, (item, _)| {
                          let node_ref = item().node_ref;

                          // Same process described above, but reversing the list positions.
                          let move_item_left = move |_| {
                              let id = item().id;

                              let ids_to_node_refs = items()
                                  .into_iter()
                                  .map(|(item, _)| item())
                                  .map(|ListItem { id, node_ref, .. }| (id, node_ref))
                                  .collect::<HashMap<_, _>>();

                              let (flip, clear) = prepare_flip(ids_to_node_refs, reflow_target, "transform 1s".to_string()).unwrap();

                              let item = right_items().into_iter().filter(|(i, _)| i().id == id).next().unwrap();

                              set_right_items.update(|items| {
                                  let position = items.into_iter().position(|(i, _)| i().id == id).unwrap();

                                  items.remove(position);
                              });

                              set_left_items.update(|items| {
                                  items.push(item);
                              });

                              let _ = flip();

                              set_timeout(|| { let _ = clear(); }, Duration::from_millis(1200));
                          };

                          view! { cx,
                              <div node_ref=node_ref class="bg-green-200 my-2 w-[10vw] flex justify-center items-center" on:click=move_item_left>
                                  <span>
                                      {move || item().text}
                                  </span>
                              </div>
                          }
                      }
                  />
              </div>
          </div>
      }
  }

  fn main() {
      mount_to_body(|cx| view! { cx, <App /> });
  }
    `}
  </CodeBlock>
</div>
