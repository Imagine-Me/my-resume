import { writable, get } from "svelte/store";
const skills = [
    {
        type: "Language",
        value: ["Javascript", "Typescript", "Python", "PHP", "HTML/CSS"]
    },
    {
        type: "Frameworks",
        value: ["ReactJS", "Svelte", "NextJS", "Nestjs", "ExpressJS", "VueJS"]
    },
    {
        type: "Databases",
        value: ["Postgres", "Mysql", "MongoDB", "SQLite"]
    },
    {
        type: "Test",
        value: ["Jest"]
    },
    {
        type: "Version Control",
        value: ["Git"]
    }
]

const experiences = [
    {
        title: "Keleno",
        role: "Software Engineer",
        place: "Kochi",
        from: "NOV 2017",
        to: "PRESENT",
        about: "Keleno is a startup that provides SaaS to real world problems.",
        responsibilities: [
            {
                description: "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
                languages: ["ReactJS", "Firebase"]
            },
            {
                description: "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
                languages: ["Python"]
            },
            {
                description: "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
                languages: ["Laravel"]
            },
            {
                description: "Created a calendar component for an appointment app, which can be modified by given APIs ",
                languages: ["Vanilla JS"]
            }]
    },
    {
        title: "Keleno",
        role: "Software Engineer",
        from: "NOV 2017",
        place: "Kochi",
        to: "PRESENT",
        about: "Keleno is a startup that provides SaaS to real world problems.",
        responsibilities: [
            {
                description: "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
                languages: ["ReactJS", "Firebase"]
            },
            {
                description: "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
                languages: ["Python"]
            },
            {
                description: "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
                languages: ["Laravel"]
            },
            {
                description: "Created a calendar component for an appointment app, which can be modified by given APIs ",
                languages: ["Vanilla JS"]
            }]
    }
]

const links = [
    {
        link: 'http://google.com',
        content: 'Github'
    },
    {
        link: 'http://google.com',
        content: 'Linkedin'
    },
    {
        link: 'http://google.com',
        content: 'Dev'
    },
    {
        link: 'http://google.com',
        content: 'Portfolio'
    }
]

export const initialData = {
    name: "Prince Thomas",
    explain: ["Team player", "Problem solver", "Eager to learn"],
    address: "Church Road, Manjapra, Angamali, Ernakulam , 683581 asdasdasd as asdasd asdasdasd",
    phoneNumber: "+91 8589852718",
    email: "princekizhtdsfsdfsdhara@gmail.com",
    skills,
    experiences,
    links
}

function createData() {
    const { subscribe, set, update } = writable(initialData)

    return { subscribe }
}

export const data = createData()
export const readableData = get(data)