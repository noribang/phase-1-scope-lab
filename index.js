// Fix the Scope
// declare customerName to be bob in global scope
//   1) returns the customerName
var customerName = "bob"
const leastFavoriteCustomer = "mary"
// upperCaseCustomerName()
//   2) modifies the customerName variable
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase()
}
// setBestCustomer()
//   3) setBestCustomer
function setBestCustomer() {
    bestCustomer = "not bob"
}
// overwriteBestCustomer()
//   4) overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}
// changeLeastFavoriteCustomer()
//   5) unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "jane"
}