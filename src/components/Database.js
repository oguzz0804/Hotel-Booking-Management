import img1 from "../images/room-1.jpeg";
import img2 from "../images/room-2.jpeg";
import img3 from "../images/room-3.jpeg";
import img4 from "../images/room-4.jpeg";
import img5 from "../images/room-5.jpeg";
import img6 from "../images/room-6.jpeg";
import img7 from "../images/room-7.jpeg";
import img8 from "../images/room-8.jpeg";
import img9 from "../images/room-9.jpeg";
import img10 from "../images/room-10.jpeg";
import img11 from "../images/room-11.jpeg";
import img12 from "../images/room-12.jpeg";

const Database = [
    {
        key: 1,
        title: 'Standard Single Room',
        description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        imgUrl: img1,
        bed: 1,
        capacity: 1,
        bedType: 'Single',
        avatar: 'S',
        price: 119
    },
    {
        key: 2,
        title: 'Couple Power Room',
        description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        imgUrl: img2,
        bed: 1,
        capacity: 2,
        bedType: 'Double',
        avatar: 'D',
        price: 149
    },
    {
        key: 3,
        title: 'Family Capacity Room',
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: img3,
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199
    },
    {
        key: 4,
        title: 'Friends Suit',
        description: ' Have lots of in-room facilities and are designed in open-concept living area with big open wide room for 6 person',
        imgUrl: img4,
        bed: 3,
        capacity: 6,
        bedType: 'Friends',
        avatar: 'Fr',
        price: 299
    },
    {
        key: 5,
        title: 'VIP Suits',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a ',
        imgUrl: img5,
        bed: 2,
        capacity: 2,
        bedType: 'VIP',
        avatar: 'V',
        price: 699
    },
    {
        key: 6,
        title: 'Sleeping Suits',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium  ',
        imgUrl: img6,
        bed: 1,
        capacity: 1,
        bedType: 'Sleeping One Night',
        avatar: 'S',
        price: 150
    }
]

export default Database;