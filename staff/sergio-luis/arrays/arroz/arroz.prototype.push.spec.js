'use strict';

describe('Arroz.prototype.push', function() {
    it('should add elements into an empty instance', function() {
        var array = new Arroz();

        expect(array.length).toBe(0);

        array.push('a');

        expect(array.length).toBe(1);
        expect(array[0]).toBe('a');

        length = array.push('b');

        expect(array.length).toBe(2);
        expect(array[0]).toBe('a');
        expect(array[1]).toBe('b');
    });

    it('should return the new length on each addition', function() {
        var array = new Arroz();
        var length = array.push('a');

        expect(length).toEqual(array.length);

        length = array.push('b');

        expect(length).toBe(array.length);
    });

    it('should add multiple values', function() {
        var array = new Arroz();
        var length = array.push('a', 'b', 'c');

        expect(array.length).toBe(3);
        expect(length).toBe(array.length);
        expect(array[0]).toBe('a');
        expect(array[1]).toBe('b');
        expect(array[2]).toBe('c');
    });
    it('If you dont pass any parameter sould be undefined', function() {
        var array = new Arroz();
        var length = array.push();

        expect(length).toBe(undefined);
        expect(array.length).toBe(0);

        var length = array.push('a');
        length = array.push();

        expect(length).toBe(undefined);
        expect(array.length).toBe(1);
    });
});