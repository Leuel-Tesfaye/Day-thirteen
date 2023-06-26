/** we use console object methods to show output on the browser console 
 *  we use document.write to show output on the browser document  */

// console.warn () : to give warning on browser. for instance to inform or warn deprecation of version of package or bad practices. 
console.warn('This is a warning message from Google ')
// console.warn('you are using react do not touch the DOM ')
// console.warn('warning is different from error')

// console.error() : method shows error messages 
console.error('This is an error message ')

// console.table() : display data is the console as a table 
const user = {
    name: 'prince',
    task: 'front end developer',
    country: 'Ethiopia',
    age : '24'
}
console.table(user)

// console.time() : used to track how long an operation takes. you give a timer a unique name and you may have 10,000 timers running on a given page. 
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.time('regular for loop')
for(let i=0; i < countries.length; i++){
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('regular for loop')

// console.info () : it displays information message on browser console. 
console.info('This is an information you should be announced ')

// console.assert() methods write an error message it the assertion is false. if the assertion is true nothing happens. 
console.assert(3 > 4 , 'three is greater than four')
