const users = []

const register = Register(function (name, surname, email, password) {
    users.push({
        name,
        surname,
        email,
        password
    })

    register.replaceWith(login)
})

const login = Login(function (email, password) {
    const user = users.find(function(user) { 
        return user.email === email && user.password === password 
    })

    if (user) console.log('eureka! you can get in')
    else console.error('wrong credentials')

    register.replaceWith(home);
    
})

const home = Home(function(name, surname){
    const fullname = user.find(function ())
    if(login)

    
})

document.getElementById('root').appendChild(register)