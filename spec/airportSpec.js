describe('Airport', function() {
  describe('Airport can receive land and return plane landed', function() {
    it('Returns plane landed', function() {
      var subject = new Airport()
      expect(subject.land()).toContain("Plane landed")
    })
  })
  describe('Airport can receive take off and return plane taken off', function(){
    it('Returns plane taken off', function() {
      var subject = new Airport()
      expect(subject.takeOff()).toEqual("Plane taken off")
    })
  })
})
