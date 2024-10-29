module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
