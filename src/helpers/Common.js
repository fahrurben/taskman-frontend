import {useEffect, useRef} from 'react'

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    });
    return ref.current
}


function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = {type}
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
}

export {usePrevious, makeActionCreator}