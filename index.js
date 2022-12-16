const images = document.querySelectorAll('img');
const promo = [...images].map(img => img.id);


const result = await Promise.all(
    promo.map(async name =>
    {
        const response = await fetch(`https://www.codewars.com/api/v1/users/${name}`);

        const responsJson = await response.json();

        return responsJson;
    })
);

images.forEach((elm, i) =>
{
    const span = document.createElement('span');
    const span2 = document.createElement('span');

    span.textContent = `Kata complété : ${result[i].codeChallenges.totalCompleted}`;
    span2.textContent = `Kata commencé : ${result[i].codeChallenges.totalAuthored}`;

    elm.parentNode.parentNode.appendChild(span);
    elm.parentNode.parentNode.appendChild(span2);
});
