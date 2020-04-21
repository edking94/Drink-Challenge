describe("my whatCanIDrink function", function() {

    beforeEach(function() {
    drink = new whatCanIDrink();
    });

    describe("Checks age", function() {

        it("should exist", function() {
           expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
          expect(whatCanIDrink).toBe("Drink Toddy");
        });

        it("should return drink coke when called as whatCanIDrink(17)", function() {
         var result = whatCanIDrink(17)
          expect(whatCanIDrink).toBe("Drink Coke");
        });

        it("should return drink coke when called as whatCanIDrink(18)", function() {
         var result = whatCanIDrink(18)
          expect(whatCanIDrink).toBe("Drink Beer");
        });

        it("should return drink coke when called as whatCanIDrink(20)", function() {
         var result = whatCanIDrink(20)
          expect(whatCanIDrink).toBe("Drink Beer");
        });

        it("should return drink coke when called as whatCanIDrink(30)", function() {
         var result = whatCanIDrink(30)
          expect(whatCanIDrink).toBe("Drink Whiskey");
        });

        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
         var result = whatCanIDrink(140)
          expect(whatCanIDrink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});
