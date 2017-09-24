'use strict';
const chai = require('chai');
const should = chai.should();
const filter = require('./filter function');





describe('Filter Method', function() {
    it('should return numbers grater than 10', function(done) {
        const a = filter([2, 5, 8, 10, 20]);
        a.should.be.an('array').and.to.have.lengthOf(2);
        a.should.have.all.members([10, 20]);
        done()
    });

    it('should throw error about not a number', function() {
        try {
            filter(['2', 5, 8, 10, 20]);
        } 
        catch (e) {
            e.should.be.an.instanceof(Error);
            e.should.have.property('message', 'This Module Only Take ')
        }

    });

     it('should throw error about not a Array', function() {
        try {
            filter({name: 'prakash', age: 25});
        } 
        catch (f) {
            f.should.be.an.instanceof(Error);
            f.should.have.property('message', 'This Is Not Array')
        }

    });
})