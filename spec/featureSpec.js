describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  it('blocks takeoff, when stormy', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport)
    spyOn(airport._weather,'isStormy').and.returnValue(true);
    expect(function() { plane.takeoff(); }).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
  it('blocks landing, when stormy', function(){
    spyOn(Math, 'random').and.returnValue(1)
    expect(function() { plane.land(airport); }).toThrowError('cannot land during storm');
    expect(airport.planes()).toEqual([])
  })
});
