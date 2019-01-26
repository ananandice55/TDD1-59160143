const greet = require('./greet')

test('Write a method greet(name)',()=>{
    expect(greet("Bob"))
})

test('when name is "Bob", the method should return a string "Hello, Bob."',()=>{
    expect(greet("Bob")).toBe("Hello, Bob.")
})

test('when name is "ice", the method should return a string "Hello, ice."',()=>{
    expect(greet("ice")).toBe("Hello, ice.")
})



test('s null, then the method should return the string "Hello, my friend."',()=>{
expect(greet(null)).toBe("Hello, my friend.")
})



test('when name is "JERRY" then the method should return the string "HELLO JERRY!"',()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!")
})

//re5
test(' when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."',()=>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.")
})
//re 6
/* test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!',()=>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
}) */

