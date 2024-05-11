const apiKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM1NjRjZjE1YThlZTkwZDQ1OTZlMjZiOTNjZDJhNmFmMWE0NzVhNThlZTZhYWQ4YTJiZjZiNWYwOTFhZTQyYTNlODM5ODQzZTMxZWNhZDAwIn0.eyJhdWQiOiIyMTg1MCIsImp0aSI6ImM1NjRjZjE1YThlZTkwZDQ1OTZlMjZiOTNjZDJhNmFmMWE0NzVhNThlZTZhYWQ4YTJiZjZiNWYwOTFhZTQyYTNlODM5ODQzZTMxZWNhZDAwIiwiaWF0IjoxNjgyMTU2MzI5LCJuYmYiOjE2ODIxNTYzMjksImV4cCI6MTY4NDE0MzUyOSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.D2cl5mlh5zlelL5BCd45NcFoeKIaCokWFz72Ienm82ESAfSXWZp6RIR4kXBKPabfWd8rAHKg_ZZWVDQp7N_JquMtvn5obxsNRzk7ZQBLmuc_jid-FPEHcbwfxqW8p2lVh96ssJvo_jixCWJiq3CrGyyj3Og9YGCH11fAS1kj4m-cXoLvjccxB4wuVegw9V-DAn7cIy48LDWK0K2hyV8Bvp3Mpl2o-kugM1j4uyx3N2fbU3RsTsmFHmzZLckAfiUKpJd8ADuHp76ERgobc3fm_iF5Rdc6ohiKEqEfXl6R1csFT4Z34n1PgaspTldFBUlGxbQ95RHCAY65hbZnLAXpgA';

const styleTypes = {
  satellite: 's',
  satelliteWithLabel: 'y',
  street: 'p',
  streetWithTraffic: 'p,traffic',
};

const stylePath = `raster/xyz/1.0.0/google:${styleTypes['satellite']}@EPSG:900913@png/{z}/{x}/{y}.png`;

const map = L.map('map', {
  center: [35.6425, 51.4015],
  zoom: 11,
});

L.tileLayer(`https://map.ir/${stylePath}?x-api-key=${apiKey}`, {
  maxZoom: 19,
  attribution: '&copy; <a href="https://help.map.ir/">map.ir</a>',
}).addTo(map);
