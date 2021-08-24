use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct DummyObject {
    a_number: i32
}

#[wasm_bindgen]
impl DummyObject {

    #[wasm_bindgen(constructor)]
    pub fn new() -> DummyObject {
        DummyObject {
            a_number: 42
        }
    }

    pub fn increase_number(&mut self) -> i32 {
        self.a_number = self.a_number + 1;
        self.a_number
    }
}
