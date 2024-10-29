use std::io;

fn main() {
    let questions = vec![
        "Do you understand proc macros?",
        "Do you understand Pin?",
        "Have you even written a bajillion lines of Rust code?"
    ];

    let stdin = io::stdin();

    for question in questions {
        match prompt_then_patronize(question, &stdin) {
            ResponseType::Lie => {
                println!("Liar!");
                break;
            },
            
            ResponseType::Expected => println!("Pathetic...")
        }
    }
}

fn yes_or_no(string: &str) -> Result<bool, ()> {
    match string {
        "Y\n" => Ok(true),
        "n\n" => Ok(false),
        _ => Err(())
    }
}

fn prompt_then_patronize(string: &str, stdin: &io::Stdin) -> ResponseType {
    println!("{string} (Y/n)");

    let mut input_string = String::new();

    loop {
        stdin.read_line(&mut input_string).expect("You broke me");

        match yes_or_no(&input_string) {
            Ok(true) => return ResponseType::Lie,
            Ok(_) => return ResponseType::Expected,
            Err(()) => println!("Beep boop, I'm a dumb robot. Please answer with \"Y\" or \"n\"")
        }
    }
}

enum ResponseType {
    Lie,
    Expected
}
