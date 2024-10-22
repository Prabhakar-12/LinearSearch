function Polindrome(number) {
      let copynumber = number;
      let reversenumber = 0;
      while (copynumber > 0) {
            Remainde = copynumber % 10;
            reversenumber = reversenumber * 10 + Remainde;
            copynumber = Math.floor(copynumber / 10);
      }
      if (reversenumber === number) {
            console.log("The number is polindrome");
      } else {
            console.log("The numberis not a polindrome number");

      }
      return reversenumber === number;
}
console.log(Polindrome(1200215));
