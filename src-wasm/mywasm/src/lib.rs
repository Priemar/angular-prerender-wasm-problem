use wasm_bindgen::prelude::*;


// mod dummy_object;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen()]
pub fn test() -> JsValue {
    JsValue::from_str("Just a test string")
}
