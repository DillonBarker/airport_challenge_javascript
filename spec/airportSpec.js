describe('Airport', function() {
  beforeEach(function(){
    plane = jasmine.createSpyObj('plane',['land']);
    airport = new Airport();
  })
  describe('Airport can receive land and return plane landed', function() {
    it('Returns plane landed', function() {
      expect(airport.land(plane)).toContain("Plane landed")
    })
  })
  describe('Airport can receive take off and return plane taken off', function(){
    it('Returns plane taken off', function() {
      expect(airport.takeOff()).toEqual("Plane taken off")
    })
  })
})
