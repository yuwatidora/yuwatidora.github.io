## CSS Notes

### Types of  `position:`

1. **`static`** (default)

* Normal document flow
* `top`, `left`, etc. have no effect
* Elements stack naturally

2. **`relative`**

* Positioned relative to its normal position
* Creates a positioning context for children
* Takes up original space in document flow
* Can use `top`, `left`, etc. to offset

3. **`absolute`**

* Positioned relative to nearest positioned ancestor
* Removed from document flow (doesn't take up space)
* Other elements act like it doesn't exist
* Can use `top`, `left`, etc.

4. **`fixed`**

* Positioned relative to the viewport (browser window)
* Stays in place when scrolling
* Removed from document flow
* Common for headers, modals, floating buttons

5. **`sticky`**

* Toggles between `relative` and `fixed`
* Acts relative until scroll threshold is met
* Then becomes fixed at specified position
* Useful for sticky headers/navigation

### Types of `display`


**`display: grid`**

* 2D layout system (rows and columns)
* Great for complex layouts

**`display: inline-block`**

* Elements sit side by side like text
* Keeps some block properties

**`display: block`** (default for divs)

* Elements stack vertically
* Takes full width available

**`display: inline`** (default for spans)

* Elements flow like text
* Can't set width/height
