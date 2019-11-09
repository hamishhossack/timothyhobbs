function chunk(array, size) {
  //declaring variable 'chunked' as an empty array
  let chunked = []

  //looping through the array until it has been entirely "manipulated" or split into our subarrays
  while (array.length > 0) {
    //taking the spliced segments completely out of our original array
    //pushing these subarrays into our new "chunked" array
    chunked.push(array.splice(0, size))
  }
  //returning the new array of subarrays
  return chunked
}

export default chunk
