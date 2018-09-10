# react-raf-marquee
A simple marquee component created to simulate the deprecated &lt;marquee> tag using requestAnimationFrame (RAF)

## Preface
An illusion of an infinite scroll is the tricky part, a set of duplicate set of data is used to accomplish the same within the code.

## Important notes
- *The component takes the width of it's parent, it's wise to have a wrapper around the component, useful for styling*


- *Scrolling is paused if the children elements is less than that of it's parent's width*

- *Chidren elements can be any HTML element, tested with text and links for now*

- *Events are bubbled up*


## PROPS

| prop | type | functionality | required | defaults to |
| --- | --- | --- | --- | --- |
| loopData | array | data for the marquee | yes | `[]` |
| direction | string | direction of animation | no | landscape |
| verticalItemHeight | number | height of component on vertical animation | yes | 0 |


