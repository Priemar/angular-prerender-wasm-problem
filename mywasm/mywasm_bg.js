import * as wasm from './mywasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @returns {any}
*/
export function test() {
    var ret = wasm.test();
    return takeObject(ret);
}

/**
*/
export class DummyObject {

    static __wrap(ptr) {
        const obj = Object.create(DummyObject.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_dummyobject_free(ptr);
    }
    /**
    * @returns {number}
    */
    get a_number() {
        var ret = wasm.__wbg_get_dummyobject_a_number(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set a_number(arg0) {
        wasm.__wbg_set_dummyobject_a_number(this.ptr, arg0);
    }
    /**
    */
    constructor() {
        var ret = wasm.dummyobject_new();
        return DummyObject.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    increase_number() {
        var ret = wasm.dummyobject_increase_number(this.ptr);
        return ret;
    }
}

export function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

