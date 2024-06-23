import ArrayBufferConverter from '../arrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('ArrayBufferConverter should correctly load and convert buffer to string', () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);
    const result = converter.toString();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toBe(expected);
});

