// Name: Placeholders
// ID: mytaplaceholders
// Description: All the placeholder blocks.
// By: Mastered YT Aditya <http://mytaditya.rf.gd> 
// By: PenguinMod <https://penguinmod.com>
// Licence: MIT AND LGPL-3.0

(function (Scratch) {
  "use strict";

  const menuIconURI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEpklEQVR4Ae1b3UsUURQ/VviQpKgZaZSuu26JJiFEL75FbwtCUlIQRvQUPdhLUBHSg/4jPvVghV+Q1ENkhQlCoc99mGwKrdoq7Ear3d/oGe7O7MzOx67tzHjgcud+nDP39zvn3NkZr2WxWIyKLA+F/UEX93gkdIdc6JuqHjIddT54Qahe3FV/4tyMoinrvxY9My7tZamXFTgCGDgWXQxy/wq7A6IUjIiD0Wg0ixGHDQDvE2VYlEuiHBClGAK7iKybomRE+SPKkiiOxS0BewVcC7BgRLhJAYCfFqUYoa4FnK+N1OgSxfb+4DRUSwk8yIET4Aysy5bYJQA3wGOtVDwvg2USsD7LRNhJgVLzugxee205JaxGgJfAgwyOhryRYIUAr4HnaLBEghUC8NyFMS8K1o31G0o+AuB9+aeooaESHsD6DVPBjACvhr7WF6apYESAX8AzGYYkGBHg5bxn0No6536QiwA/5L0WPLd1+0EuAvzofSZAFwVaAvzsfSYhKwq0BPjZ+0xAVhTIBATB+0yCWssEBMH7DFxNA5kAHgxCraYBExDI8IenwQQkSOG/g3j3HYcjgDuDVMP5g0EmQHE2CMA3NOyKgRQlDAKJfBf0fgoE2fvAvh8B+xEQcAb2U0AEAI6g4E9JgRScD3grkOOwAd4HAieBTwF+G3Tt+au9N+jsuU7a2srQxw/vaGL8uanNSMtputxzjWpqaym+HKeRp8P0Y3HRUKe6uoZ6r/fRqcYQJTeT9HLsBc3NzRrOtzrABODQEd4HuG1VX5kX6+6h7p4r4rpMaUdaorS6lqD3029y2ikvL6e7/fepru6YMn6ysYmO1tbR4wf3cs5H563bd6jzPD5b7EioKSLm99Pyzzh32a2x7w1wCuBoCU5fOZK2tg6htwN+x0AZdXR0GtoKNUdU8Dwp1BymyqoqburqSPRMVl9FxWFqa8d9HQvwDjEBjq1AcWMjqdNfT67r+rhjNfFLpMoWN5U6lU7R73Vjnc3Njaz5aKwlEro+ux0yAUgDR4/DybFnBFAs8fgSTU2OclNXr6ws06upSdre3lbGMpkMTYyO6ObJHeNiPJ1Oq11zszNu9gDgBF7SHpHBtwFHx1qPVFZSa2s7AczC/CdKpVKwbyrhSJTqG07Q929fRPlqOheDx+sbKByO0prYXxbmP+edbzJBPX6rJQC7zLQojjZDkxuW0hC83yWKcqROTgEs0tVmCAMeEGx+6nlCLQFYv+O9wAPg1dznteYiwM9RkOV9kJCLAPT7MQp03jcjAFGAjQJKfhDgAB419xmUUQRg3C8kGIIHSDMCmATkjZdFl/cymHwEYK6X9wN4X/nFJ4OWr60Q4NVUMA19JsEKAZjrNRIsgQcwqwTIJJTyN0QAx/q6RNHt+AChFbu/+WEUBXlVau8Mlr0uk2AnAmS9UksJR+AByCkB0GUS/mdK2A55LFwWuykg6+JaTgl8Vnf8XVFrOE8bwPF8RypiDY7FLQF8470iomDAeeGFIoDtaYlAv9uoYNCw5drjMCJLoQlg20wE2li0/FenfITIgFnfVZjDiJEUiwD5fjIZ3G/23RG5XbR/l+cFcP0P9AUW5NIJinQAAAAASUVORK5CYII=";

  class Placeholders {
    getInfo() {
      return {
        id: "mytaplaceholders",
        name: "Placeholders",
        color1: "#4c4c4c",
        color2: "#2c2c2c",
        color3: "#000000",
        menuIconURI: menuIconURI,
        blocks: [
          {
            opcode: "dot_command",
            blockType: Scratch.BlockType.COMMAND,
            text: "...",
            arguments: {
            },
          },
          {
            opcode: "dot_reporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "...",
            disableMonitor: true,
            arguments: {
            },
          },
          {
            opcode: "dot_boolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "...",
            disableMonitor: true,
            arguments: {
            },
          },
        ],
      };
    }

    dot_command() {
      // no-op
    }

    dot_reporter(args) {
      return '';
    }

    dot_boolean(args) {
      return false;
    }
  }
  Scratch.extensions.register(new Placeholders());
})(Scratch);
