// Write your solution in this file!
// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    const newObject = Object.assign({}, object, { [key]: value });
    return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key) {
    const newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}