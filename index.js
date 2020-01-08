const driver = {
    name: 'Lluis',
    age: '24',
    city: 'Chicago'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const updatedDriver = Object.assign({}, driver)
    updatedDriver[key] = value
    return updatedDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
