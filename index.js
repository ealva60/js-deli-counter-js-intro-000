function takeANumber(line, name) {
 line.push(name)
 var pos = line.length
 console.log(`Welcome, ${name}. You are number ${pos} in line.`)
}

function nowServing(line) {
  var person = ""
  if (line.length > 0) {
    person = line[0]
    line.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  If (line.length < 1) {
    return "The line is currently empty."
  }
}
