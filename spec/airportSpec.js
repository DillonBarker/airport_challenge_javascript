describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane = jasmine.createSpy('plane',['land', 'takeoff']);
    airport = new Airport(weather);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane])
    })
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([])
    })
  })

  describe('under stormy weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    })
    it('does not clear plane for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(); }).toThrowError('cannot takeoff during storm');
    })
    it('does not clear plane to land', function(){
      expect(function(){ airport.clearForLanding(); }).toThrowError('cannot land during storm');
    });
  });
});
