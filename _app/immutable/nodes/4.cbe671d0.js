import{S as y,i as b,s as $,k as d,q as x,a as D,y as k,l as p,m as h,r as w,h as a,c as I,z as E,n as u,b as f,G as g,A as L,g as A,d as H,B as V,o as F,H as M}from"../chunks/index.201e1dc2.js";import{C as P}from"../chunks/CodeBlock.c805c78d.js";function T(_){let t=`
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
                            match flip().map_err(|err| format!("An error has occurred when attempting a FLIP: {:?}", err)) {
                                Ok(()) => (),
                                Err(err) => console_log(&format!("{err}"))
                            }

                            // Clear styles after timeout.
                            set_timeout(|| {
                                match clear().map_err(|err| format!("An error has occurred when attempting to clear the elements' transition styles: {:?}", err)) {
                                    Ok(()) => (),
                                    Err(err) => console_log(&format!("{err}"))
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
    `,i;return{c(){i=x(t)},l(s){i=w(s,t)},m(s,l){f(s,i,l)},p:M,d(s){s&&a(i)}}}function j(_){let t,i,s,l,n,o,c;return o=new P({props:{lang:"language-rust",$$slots:{default:[T]},$$scope:{ctx:_}}}),{c(){t=d("div"),i=d("h1"),s=x("Full leptos_transition_flip example"),l=D(),n=d("div"),k(o.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var r=h(t);i=p(r,"H1",{class:!0});var m=h(i);s=w(m,"Full leptos_transition_flip example"),m.forEach(a),r.forEach(a),l=I(e),n=p(e,"DIV",{class:!0});var v=h(n);E(o.$$.fragment,v),v.forEach(a),this.h()},h(){u(i,"class","text-3xl"),u(t,"class","flex flex-row justify-center items-center"),u(n,"class","mx-40")},m(e,r){f(e,t,r),g(t,i),g(i,s),f(e,l,r),f(e,n,r),L(o,n,null),c=!0},p(e,[r]){const m={};r&1&&(m.$$scope={dirty:r,ctx:e}),o.$set(m)},i(e){c||(A(o.$$.fragment,e),c=!0)},o(e){H(o.$$.fragment,e),c=!1},d(e){e&&a(t),e&&a(l),e&&a(n),V(o)}}}function C(_){return F(()=>{window!=null&&window.Prism&&window.Prism.highlightAll()}),[]}class O extends y{constructor(t){super(),b(this,t,C,j,$,{})}}export{O as component};
