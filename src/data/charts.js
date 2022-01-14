
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Desktop", value: 60, color: "secondary", icon: faDesktop },
    { id: 2, label: "Mobile Web", value: 30, color: "primary", icon: faMobileAlt },
    { id: 3, label: "Tablet Web", value: 10, color: "tertiary", icon: faTabletAlt }
];

const totalOrders = [
    { id: 1, label: "Open Orders", value: [1, 5, 2, 5, 4, 3], color: "21" },
    { id: 2, label: "Close Orders", value: [2, 3, 4, 8, 1, 2], color: "23" }
];

export {
    trafficShares,
    totalOrders
};