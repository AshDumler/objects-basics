/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const karma = {
   name: 'Karma',
   cuisines: ['sushi', 'soup', 'ramen'],
   numberOfStars: 4,
   favorited: true,
}

karma.address = 'Downtown Flagstaff, AZ';
karma.zipcode = 86001;
karma.acceptsReservations = true;

karma['numberOfStars'] = '5';
karma['favorited'] = false;
karma.cuisines.push('tofu');

karma.retrieveProperty = function (obj, key, name) {
      const check = obj.hasOwnProperty(name);
      if (check === true) {
       console.log(key);
      }
      else {
        console.log('The information you requested does not exist.');
      }
    }
    
    karma.retrieveProperty(karma, karma.cuisines ,"cuisines");