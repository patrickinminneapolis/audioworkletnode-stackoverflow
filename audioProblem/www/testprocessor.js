// https://stackoverflow.com/questions/11292076/load-audiodata-into-audiobuffersourcenode-from-audio-element-via-createmediae/70753627#70753627

class testprocessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    console.log(
      "=====================constructing testprocessor v2====================="
    );

    this.port.onmessage = (e) => {
      console.log(e.data);
    };
  }
  // @ts-ignore
  process(inputs, output, parameters) {
    console.log("===================== process hit =====================");

    /**
     * @type {Float32Array} length 128 Float32Array(128)
     * non-interleaved IEEE754 32-bit linear PCM
     * with a nominal range between -1 and +1,
     * with each sample between -1.0 and 1.0.
     * the sample rate depends on the audioContext and is variable
     */
    /*
    const inputChannel = inputs[0][0]; //inputChannel Float32Array(128)
    this.port.postMessage(inputChannel); // float32Array sent as byte[512]

    if (inputChannel[0] != 0) {
      console.log("audiobuffer ok");
    } else {
      console.log("audiobuffer might be empty");
    }
    */

    return true; // always do this!
  }
}

registerProcessor("testprocessor", testprocessor);
