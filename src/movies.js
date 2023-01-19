// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//function getAllDirectors(moviesArray) {}
function getAllDirectors(moviesArray) {
    return moviesArray.map(function (movie) {
        return movie.director;
      })
      // .filter(function (director, index, sourceArray) {
      //   return sourceArray.indexOf(director) === index;
      // });
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  return movies.filter((element) => {
    return (element.director === 'Steven Spielberg' && element.genre.includes("Drama")) }).length

}
    


// Iteration 3: All scores average - Get the average of all scores with 2 decimals


    
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){

      return 0
    }
  
    let average = 0
    
    const averageScores = moviesArray.reduce(function (sum, movie) {
   
        if(!movie.score){
          movie.score = 0
        }
        return sum + movie.score;
        
      },0)
    average = averageScores/moviesArray.length;
    
    return Number(average.toFixed(2))



    }



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  return scoresAverage(moviesArray.filter((element) => {
    return (element.genre.includes("Drama")) })  )
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const clone = [...moviesArray];

  
   return clone.sort(function(a, b) { 
     if(a.year === b.year){
       return a.title.localeCompare(b.title)
     }
        return a.year - b.year 
   })
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  return[...moviesArray].sort((a,b) => {
    if(a.title > b.title)
    {
      return 1;
    }
   else if(a.title < b.title){
     return -1;
   }
   else {
     return 0;
   }
 
 }).map((moviesArray) => moviesArray.title).slice(0,20)


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
