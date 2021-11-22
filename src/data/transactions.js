
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import moment from "moment-timezone";

export default [
    {
        "invoiceNumber": 1,
        "status": "Paid",
        "subscriptionType": "Platinum Subscription Plan",
        "fullName": "David",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY"),
        // "download" : <FontAwesomeIcon icon={faDownload} />


    },
    {
        "invoiceNumber": 2,
        "status": "Paid",
        "subscriptionType": "Platinum Subscription Plan",
        "fullName": "Alex",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 3,
        "status": "Paid",
        "subscriptionType": "Platinum Subscription Plan",
        "fullName": "John",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 4,
        "status": "Paid",
        "subscriptionType": "Silver Subscription Plan",
        "fullName": "Smith",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 5,
        "status": "Due",
        "subscriptionType": "Gold Subscription Plan",
        "fullName": "Frank",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 6,
        "status": "Due",
        "subscriptionType": "Gold Subscription Plan",
        "fullName": "Tran",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 7,
        "status": "Due",
        "subscriptionType": "Silver Subscription Plan",
        "fullName": "Joe",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 8,
        "status": "Canceled",
        "subscriptionType": "Gold Subscription Plan",
        "fullName": "Josh",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 9,
        "status": "Canceled",
        "subscriptionType": "Platinum Subscription Plan",
        "fullName": "Jack",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    },
    {
        "invoiceNumber": 10,
        "status": "Paid",
        "subscriptionType": "Platinum Subscription Plan",
        "fullName": "Jimmy",
        "email": "David@gmail.com",
        "address": "California",
        "phone" : "12345678",
        "Amount" : "$450",
        "Remarks" : "Refund for gold subscription",
        "issueDate" : moment().subtract(0, "days").format("DD-MM-YYYY"),
        "dueDate" : moment().subtract(7, "days").add(1,"month").format("DD-MM-YYYY")
    }
]