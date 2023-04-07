## Summary


## Introduction

Welcome to the world of R! R is a popular programming language for data analysis and statistical computing. In this tutorial, we will go through the first steps to get started with R.

**Step 1**: Install R
The first step is to install R on your computer. You can download the latest version of R from the official website: https://www.r-project.org/. Follow the installation instructions to install R on your computer.

**Step 2**: Install RStudio
RStudio is an integrated development environment (IDE) for R. It provides a user-friendly interface to work with R. You can download the latest version of RStudio from the official website: https://www.rstudio.com/products/rstudio/download/. Follow the installation instructions to install RStudio on your computer.

**Step 3**: Open RStudio
After installing RStudio, open it. You should see a window with four panes: Source, Console, Environment, and Plots.

**Step 4**: Create a new script
To start writing R code, create a new script file. Click on File -> New File -> R Script or use the shortcut Ctrl + Shift + N (Windows) or Command + Shift + N (Mac). This will open a new window for you to write your code.

**Step 5**: Write your first R code
Type the following code in the script file:

```r
# This is a comment. R ignores comments.
# Type in the following command and press Enter.
print("Hello, world!")
```

The "#" sign indicates that this is a comment and R will ignore it. The "print" function is used to print the message "Hello, world!" to the Console pane. To run the code, click on the "Run" button in the Source pane or use the shortcut Ctrl + Enter (Windows) or Command + Enter (Mac). You should see the message "Hello, world!" printed in the Console pane.

**Step 6**: Assign values to variables
Variables are used to store values in R. To assign a value to a variable, use the assignment operator "<-" or "=".

```r
# Assign the value 10 to a variable called x
x <- 10

# Assign the value "Hello" to a variable called message
message <- "Hello"
```

**Step 7**: R has a vast collection of packages that extend its functionality. To install a package, use the "install.packages" function. To load a package, use the "library" function.

```r
# Install the "dplyr" and "ggplot2" packages
install.packages(c("dplyr", "ggplot2"))

# Load the "dplyr" and "ggplot2" packages
library(dplyr)
library(ggplot2)
```

**Step 8**: Create a dataset

```r
# Create a sample dataset
customers <- data.frame(
  name = c("Alice", "Bob", "Charlie", "Dave", "Emily"),
  purchases = list(
    data.frame(item = c("book", "pen", "book", "pencil"),
               price = c(10, 2, 15, 1)),
    data.frame(item = c("book", "book", "pen", "notebook", "eraser"),
               price = c(12, 8, 3, 5, 2)),
    data.frame(item = c("book", "pen", "book", "notebook", "eraser"),
               price = c(20, 3, 10, 7, 1)),
    data.frame(item = c("book", "pen", "pencil", "notebook", "eraser"),
               price = c(18, 5, 2, 6, 3)),
    data.frame(item = c("book", "pen", "book", "notebook"),
               price = c(25, 6, 18, 12))
  )
)

# Use the "dplyr" package to group the purchases by customer and sum the prices
total_spent <- customers %>%
  mutate(total = sapply(purchases, function(x) sum(x$price))) %>%
  select(name, total)

# View the result
print(total_spent)

# Use the "ggplot2" package to create a histogram of the total amounts
ggplot(total_spent, aes(x = total)) +
  geom_histogram(binwidth = 10, fill = "blue") +
  labs(title = "Distribution of total amounts spent",
       x = "Total amount spent",
       y = "Frequency")
```

## Data types

**Numeric**: Numeric data type is used to represent numbers with decimal points or without decimal points. For example, 4.5 and 7 are both numeric data types.

```r
x <- c(0.4, 0.5) ##Numeric
```

**Integer**: Integer data type is used to represent whole numbers. For example, 3 and 12 are both integer data types.

```r
x <- 2:10 ##Numeric
```

**Character**: Character data type is used to represent text strings. For example, "hello" and "R programming" are both character data types.

```r
x <- c("a","b","c") ##Character
```

**Logical**: Logical data type is used to represent binary values - TRUE or FALSE. Logical data types are often used in conditional statements and logical operations.

```r
x <- c(TRUE, FALSE) ##Logical
```

**Complex**: Complex data type is used to represent complex numbers. Complex numbers have a real and imaginary part, and can be used in various mathematical operations.

```r
x <- c(1+2i, 8-6i) ##Complex
```

<span style="color:red">!!! Atention !!!</span>

***Mixing Objects***

In R, when you try to mix objects of different data types or structures, the common denominator is usually a simpler data type or structure that can accommodate all the objects being mixed.

For example, when you try to add a numeric value to a character string in R, R will convert the character string to a numeric value if possible, or it will return an error if the conversion is not possible. This is because adding a numeric value to a character string is not possible, so R tries to convert the character string to a numeric value to make the operation possible.

Similarly, when you try to combine two data frames with different column names, R will create new columns with the same names for the missing columns and fill them with missing values (NA) to ensure that both data frames have the same structure.

In general, when trying to mix objects in R, it is important to pay attention to their data types and structures, and to use functions and operations that are appropriate for the data types and structures involved. It is also important to be aware of how R handles data type conversions and missing values, as these can affect the results of your analyses.

***Example**:

```r
x <- c(1.7, "a") # Character vector of "1.7" and "a"
x <- c(TRUE, 2) # Numeric, because "TRUE" value in this case is 1
x <- c ("a", FALSE) # Character vector of "a" and "0"
```

### Explicit Coercion

Explicit coercion in R refers to the process of converting an object from one data type to another using a specific function or operator.

Here is a simple example of explicit coercion in R:

```r
# create a character vector
x <- c("10", "20", "30")

# explicitly coerce the character vector to a numeric vector
x_num <- as.numeric(x)

# print the results
x_num
```

## Lists

Here's a simple example of a list in R containing different types of objects:

```r
# create a list containing different types of objects
x <- list("hello", 123, TRUE, c(1, 2, 3))

# print the list
x
```

Output:

```r
[[1]]
[1] "hello"

[[2]]
[1] 123

[[3]]
[1] TRUE

[[4]]
[1] 1 2 3
```

Each object in the list is assigned an index starting from 1, and we use double square brackets [[ ]] to access the individual elements of the list.

Lists are a flexible data structure in R that can contain objects of different types and lengths. They can be useful for storing and manipulating heterogeneous data, such as data frames with different types of variables.

## Matrices

In R, a matrix is a two-dimensional array with rows and columns, where each element is of the same data type. Matrices are useful for organizing and manipulating data in a tabular format, such as storing observations of variables or storing results of a simulation.

Here is an example of how to create a matrix in R:

```r
# create a matrix with three rows and two columns
x <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3, ncol = 2)

# print the matrix
x
```

You can also create a matrix directly from vectors by adding a dimension atribute.

```r
x <- 1:10 ## Create a vector with 10 elements
dim(x) <- c(2,5) ## Putting the vector in 2 rows and 5 columns
```

### cbind and rbind functions

In R, cbind() and rbind() are functions that allow you to combine two or more vectors, matrices, or data frames into a single matrix or data frame. cbind() combines vectors or matrices column-wise, while rbind() combines them row-wise.

Here is a simple example of cbind() in R:

```r
x <- c(1, 2, 3)
y <- c(4, 5, 6)

combined_matrix <- cbind(x, y)
combined_matrix <- rbind(x, y)
```

## Factors

In R, factors are used to represent categorical data. A factor is a vector that contains a finite set of unique values, called levels, that represent the categories or groups of the data. Factors are useful for storing and analyzing data that have a limited number of categories, such as gender, educational level, or geographic region.

Here is an example of how to create a factor in R:

```r
# create a vector of categorical data
x <- c("red", "blue", "green", "red", "blue", "blue")

# convert the vector to a factor
x <- factor(x)

# print the factor and its levels
x

# count the occurrences of each level
table(x)

# strip the levels to a vector
unclass(x)

```
Output:

```r
[1] red   blue  green red   blue  blue 
Levels: blue green red

blue green   red 
    3     1     2
    [1] 3 1 2 3 1 1
attr(,"levels")
[1] "blue"  "green" "red"
```

You cal also set the levels argument in factors like this:

```r
x <- factor(c("red", "blue", "green", "red", "blue"), "blue", levels = c("red","blue","green"))
```

As you can see, the factor "x" contains the unique values in x as its levels, which are displayed in alphabetical order.

Factors in R can be very useful for analyzing and visualizing categorical data. They can also be used for statistical analysis, such as contingency tables, chi-squared tests, and logistic regression.

## Missing values (NA and NAN)

In R, missing values are represented by 'NA', which stands for "not available". 'NA' is a reserved value that indicates that data is missing or unknown. 'NA' can occur in vectors, matrices, data frames, and other R objects.

Here is an example of how to create and handle missing values in R:

```r
# create a vector with missing values
x <- c(1, 2, NA, 4, NA)

# calculate the mean of the vector (ignoring missing values)
mean(x, na.rm = TRUE)

# replace missing values with 0
x[is.na(x)] <- 0
x
```

In this example, we create a vector called my_vector that contains missing values represented by NA. We then calculate the mean of the vector using the mean() function, which has an argument na.rm = TRUE to ignore the missing values. We also replace the missing values with 0 using the is.na() function and subsetting.

As you can see, the mean() function ignores the missing values and calculates the mean of the non-missing values in the vector. We then replace the missing values with 0 using the is.na() function and subsetting.

It's worth noting that NA is not the same as NaN, which stands for "not a number". NaN is used to represent undefined or indeterminate values, such as the result of dividing 0 by 0. NaN is also used to represent missing values in some contexts, but in R, NA is the preferred way to represent missing values.

Here is an example of NaN in R:

```r
# create a vector with NaN
x <- c(1, 2, NaN, 4, NaN)

# check for NaN values
is.nan(x)

# calculate the mean of the vector (including NaN)
mean(x)
```

