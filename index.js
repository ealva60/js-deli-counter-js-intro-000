function takeANumber(line, name) {
 line.push(name)
 var pos = line.length
 console.log(`Welcome, ${name}. You are number ${pos} in line.`)
}

function nowServing(line) {
  if (line.length > 0) {
    console.log(`Currently serving ${line[0]}.`)
    line.shift()
  } else {
    console.log("There is nobody waiting to be served!")
  }
}
