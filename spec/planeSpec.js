describe('Plane', function() {
  beforeEach(function(){
    airport = jasmine.createSpyObj('Airport',['isGrounded']);
    plane = new Plane();
  })
  describe('Plane starts as grounded', function() {
    it('returns true for plane grounded', function() {
      expect(plane.grounded).toBeTruthy()
    })
  })
})
