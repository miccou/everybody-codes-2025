add <- function(a, b) {
    return(a + b)
}

multiply  <- function(a, b) {
    return(c(a[1] * b[1] - a[2] * b[2], b[1] * b[2] + a[2] * b[1]))
}

divide <- function(a, b) {
    return(c(trunc(a[1] / b[1]), trunc(a[2] / b[2])))
}

run1 <- function(A, R) {
    return(add(divide(multiply(R, R), c(10, 10)), A))
}

run2 <- function(R, coords) {
    return(add(divide(multiply(R, R), c(100000, 100000)), coords))
}

part1 <- function() {
    A <- c(25, 9) # example A

    R <- c(0, 0)
    R <- run1(A, R)
    R <- run1(A, R)
    R <- run1(A, R)
    print(R)
}

part2 <- function() {
    A <- c(35300, -64910) # example A

    grid <- matrix(nrow=101, ncol=101)
    for(i in 1:101) {
        for(j in 1:101) {
            R <- c(A[1] + ((j - 1) * 10), A[2] + ((i - 1) * 10))
            coords <- R

            engrave <- 0
            for(k in 1:100) {
                if(R[1] <= 1000000 && R[1] >= -1000000 &&
                   R[2] <= 1000000 && R[2] >= -1000000 ){

                    R <- run2(R, coords)

                    if(k == 100) {
                        engrave <- 1
                    }
                }
            }
            grid[i, j] <- engrave
        }
    }

    print(sum(grid))
}

part3 <- function() {
    A <- c(35300, -64910) # example A

    grid <- matrix(nrow=1001, ncol=1001)
    for(i in 1:1001) {
        for(j in 1:1001) {
            R <- c(A[1] + ((j - 1) * 1), A[2] + ((i - 1) * 1))
            coords <- R

            engrave <- 0
            for(k in 1:100) {
                if(R[1] <= 1000000 && R[1] >= -1000000 &&
                   R[2] <= 1000000 && R[2] >= -1000000 ){

                    R <- run2(R, coords)

                    if(k == 100) {
                        engrave <- 1
                    }
                }
            }
            grid[i, j] <- engrave
        }
    }

    print(sum(grid))
}

part1()
part2()
part3()