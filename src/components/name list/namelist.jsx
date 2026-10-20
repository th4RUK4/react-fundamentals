import React from 'react';
import NameListItem from './namelistitem';

function NameList() {

    const nameList = [
        {
            id: 1,
            name: { title: "Mr", first: "Jennie", last: "Nichols" },
            location: { city: "Billings" },
            email: "jennie.nichols@example.com",
            dob: { date: "1992-03-08T15:13:16.688Z", age: 30 },
            picture: {
            medium: "https://randomuser.me/api/portraits/men/79.jpg",
            },
        },
        {
            id: 2,
            name: { title: "Miss", first: "Sarah", last: "Johnson" },
            location: { city: "New York" },
            email: "sarah.johnson@example.com",
            dob: { date: "1995-06-14T10:25:30.688Z", age: 31 },
            picture: {
            medium: "https://randomuser.me/api/portraits/women/44.jpg",
            },
        },
        {
            id: 3,
            name: { title: "Mr", first: "David", last: "Smith" },
            location: { city: "London" },
            email: "david.smith@example.com",
            dob: { date: "1990-11-22T08:15:45.688Z", age: 35 },
            picture: {
            medium: "https://randomuser.me/api/portraits/men/32.jpg",
            },
        },
        {
            id: 4,
            name: { title: "Mrs", first: "Emily", last: "Brown" },
            location: { city: "Toronto" },
            email: "emily.brown@example.com",
            dob: { date: "1988-02-17T14:30:20.688Z", age: 38 },
            picture: {
            medium: "https://randomuser.me/api/portraits/women/68.jpg",
            },
        },
       {
            id: 5,
            name: { title: "Mr", first: "Michael", last: "Wilson" },
            location: { city: "Sydney" },
            email: "michael.wilson@example.com",
            dob: { date: "2000-09-05T12:45:10.688Z", age: 26 },
            picture: {
            medium: "https://randomuser.me/api/portraits/men/75.jpg",
            },
        },
];

const nameListComp = () => {
    return nameList.map(aName => (
        <NameListItem
        key={aName.id}
            name={`${aName.name.first} ${aName.name.last}`}
            city={aName.location.city}                  
            email={aName.email}
            birthday={aName.dob.date}
            avatar={aName.picture.medium}
        />
    ));
};

    return (
        <React.Fragment>
            <div className="container mt=4">
            <ul className="list-group">{nameListComp()}</ul>
            </div>
        </React.Fragment>
    );
}

export default NameList;