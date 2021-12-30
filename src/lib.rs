use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    if n < 2 { n } else { fibonacci(n - 1) + fibonacci(n - 2) }
}