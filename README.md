## deepkeys
Have you ever needed to check all the keys in a deeply nested object?

If the answer is yes, then  this is the package for you!

This package takes any object and gives you back an array of all the keys on the object. Think of it as a handy recusive Object.keys.


```javascript
const obj = {
    thing: {
        thing1: {
            thing2: {
                thing3: 'cat'
            }
        }
    }
};

deepKeys(obj); //['thing', 'thing1', 'thing2', 'thing3']

```
