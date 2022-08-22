const scrape = require('./scrape');
const { telegramBot } = require('./telegramBot');

const token = '5453119126:AAGO4_PRWtUkwvqjTyHyFylyM_FyvObI360';

var intervalId = null;
var oldItems = false;

async function checkNewItemsNotification(url, ms) {
      oldItems = await getItems(url);
      intervalId = setInterval(async () => {
            let currentItems = await getItems(url);
            let newItems = getNewItems(oldItems, currentItems);
            oldItems = currentItems;
            if (newItems.length < 1) return;
            for (let i in newItems) {
                  let item = newItems[i];

                  let chat_id = -1001734694248;
                  let photo = item.image;

                  const opts = {
                        caption: item.url,
                  };

                  telegramBot.sendPhoto(chat_id, photo, opts);

                  console.log(item.url);
            }
      }, ms || 60000);
}

async function getItems(url) {
      const items = await scrape.scrape(
            {
                  url: url,
                  keyword: { id: '123', keyword: 'celular' },
                  headless: true,

                  //path:''
            },
            () => {}
      );
      return items;
}

function getNewItems(oldItems, currentItems) {
      let returnItems = [];

      if (oldItems.length > 0 && currentItems.length > 0) {
            console.log(oldItems[0].url);
            console.log(currentItems[0].url);
      }
      for (
            let currentIndex = 0;
            currentIndex < currentItems.length;
            currentIndex++
      ) {
            let exist = false;
            let currentItem = currentItems[currentIndex];
            for (let oldIndex = 0; oldIndex < oldItems.length; oldIndex++) {
                  let oldItem = oldItems[oldIndex];
                  if (oldItem.url == currentItem.url) {
                        exist = true;
                        break;
                  }
            }
            if (exist) continue;
            returnItems.push(currentItem);
      }
      return returnItems;
}

module.exports = {
      checkNewItemsNotification: checkNewItemsNotification,
      intervalId: intervalId,
      getItems: getItems,
};
