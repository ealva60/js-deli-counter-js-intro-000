function takeANumber(line, name) {
 line.push(name)
 var pos = line.length
 console.log(`Welcome, ${name}. You are number ${pos} in line.`)
}

function nowServing(line) {
  var person
  if (line.length > 0) {
    person = line[0]
    line.shift()
    return `Currently serving ${line[0]}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
