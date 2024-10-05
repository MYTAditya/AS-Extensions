// Name: Logic Gates
// ID: mytalogicgates
// Description: All the blocks related to Logic Gates.
// By: Mastered YT Aditya <http://mytaditya.rf.gd> 
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>
// By: Scratch Team <https://scratch.mit.edu/users/Scratchteam/>
// License: MIT

((Scratch) => {
  "use strict";

  const icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD0UlEQVR4Ae2aQZLbIBBF7ZTvlI13OYJvkyxSWczcZo6Q3Wx8pyzCU/lPtVrCAgE2sk2VBgtB0/3/b9BI2n98fOwop9Npp99DQ70/P4OptwJzv8LY94LxV4ceCLxB+R5s/rjY/VNo347/G2ydC+2Nhu8rs67AcfowmqnOyb9g5nc4qgHxrY5fOwJH6p/hQO4tgg9mB7vYZx7mY96iUgrArQL3QQJwFSBKACD41oz7wP25BWKVGtYCoOBxoIeCH5CRDUIuAEygXO8leBEgELLWhhwAxHrLRU7BrK0BQWtDkhpSAVDwvbEeA0pqWAQhBYCtBS9QkkBIAYA7uq0wr+BV47fuSNU2qpcAgH17KzoavJET/I+mwjVmi6W/9H9G5dvwGB9KhWPoMPk/IqaA4uBj3typXSBMlBBTQNW890xLGaoFiu+n9ko1sRLXSAVzCgClred9DLPJejCngKrsz3nimZYSVPvrczZWtk1U4BXwyOwLs5EK/BOh5uzLC1uLcSnAXmvwe6QCq4BnYH+C50HohyvV2V/LqMYZ3yaOFzaQBsNjNauAQpubGq402AmALuQP45Z1lCA1tIJX22B1+bdyuKLd4V5HCqhot9yUV0K5xVkLkP/WJQCz7jZqBAWeoQ1yaDRHNbOx9cCuG7mTDTLIHfRI/bUIdh2TZ16Mq1212nOCea0BOWjdu69nWOdSgOocP18KyEHr3n3FsGdefqld5yn1SwEBJT5B4T6g2x1BzEoBqsWwrus8pyZofX/DO7WnK92yPsdECdNz9mh7rQEXZHg60s064HP84mPtavjgSgrgZQFfXz1TId73rtYAz3yLnPcMSwG0kwbI4hkKcRLvaO8/BwaQxd23wxswT5zDO0L/YqSrxRCGGpQv9rHt14BzQL+aCnxOx4JJ7Rcbn9n+xT7j7IsR2XlkFYzYHwBQ1KbWlthsLYgxfsvcV7x2F1Ab9SPuCBP2CdSvAbRRUMExHJ/hiPUJl9LKHRmXgwRPPMPKr0bqmAK4JhAYvOUSDZ6gltgtWg9ukNMpxIxWfT/gmgLUd8vrAezjf7SkALDVVLgqfSGSAgB9twZCUvAElgqABYFniEzQY8Ev/DuGA9IWy9Ii6A1glIO8qrJF+gkKzpNZt3PkKMCO6y0lVgVPQGsBYKxAuGdKZEsex23JTQE7lt82JfjM5lbPFQmc/Z1UxIfVZe9HFt688LFVSyCqBa64R/8Ox+7Z1Tmh9opgSKkqFDS2ihnHiC2lKWBt2d8CgjacRhUqS4DYgBlTPWg5Qt0KADuHBUPt1541kNt6Xaf+zer/DsP5Nrw6dqkAAAAASUVORK5CYII=";

  const cast = Scratch.Cast;

  class LogicGate {
    getInfo() {
      return {
        id: "mytalogicgates",
        name: "Logic Gates",
        color1: "#adadad",
        color2: "#686868",
        color3: "#242424",
        menuIconURI: icon,
        blocks: [
         {
            opcode: "and_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] AND [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "or_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] OR [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "not_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "NOT [A]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "nand_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] NAND [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "nor_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] NOR [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "xor_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] XOR [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "xnor_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[A] XNOR [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
        ],
      };
    }

    and_block({ A, B }) {
      return cast.toBoolean(A) && cast.toBoolean(B);
    }
    or_block({ A, B }) {
      return cast.toBoolean(A) || cast.toBoolean(B);
    }
    not_block({ A }) {
      return !(cast.toBoolean(A));
    }
    nand_block({ A, B }) {
      return !(cast.toBoolean(A) && cast.toBoolean(B));
    }
    nor_block({ A, B }) {
      return !(cast.toBoolean(A) || cast.toBoolean(B));
    }
    xor_block({ A, B }) {
      return cast.toBoolean(A) !== cast.toBoolean(B);
    }
    xnor_block({ A, B }) {
      return cast.toBoolean(A) === cast.toBoolean(B);
    }
  }

  Scratch.extensions.register(new LogicGate());
})(Scratch);
              
