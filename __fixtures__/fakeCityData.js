const cityData = '{"city":{"1":{"city":"Абаза","region":"Хакасия","okrug":"Сибирский","latitude":"52.651657","longitude":"90.088572","id":1},"2":{"city":"Абакан","region":"Хакасия","okrug":"Сибирский","latitude":"53.721152","longitude":"91.442387","id":2},"3":{"city":"Абдулино","region":"Оренбургская область","okrug":"Приволжский","latitude":"53.677839","longitude":"53.647263","id":3},"4":{"city":"Абинск","region":"Краснодарский край","okrug":"Южный","latitude":"44.866256","longitude":"38.151163","id":4},"5":{"city":"Агидель","region":"Башкортостан","okrug":"Приволжский","latitude":"55.899835","longitude":"53.92204","id":5},"586":{"city":"Моршанск","region":"Тамбовская область","okrug":"Центральный","latitude":"53.443611","longitude":"41.811627","id":586},"587":{"city":"Мосальск","region":"Калужская область","okrug":"Центральный","latitude":"54.491307","longitude":"34.984197","id":587},"588":{"city":"Москва","region":"Москва","okrug":"Центральный","latitude":"55.753215","longitude":"37.622504","id":588}},"ids":[1,2,3,4,5,586,587,588]}';

module.exports = () => JSON.parse(cityData);