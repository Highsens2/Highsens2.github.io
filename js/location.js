const selector = document.querySelector('#LocationDrop');
        const iframeContainers = document.querySelectorAll('.iframe-container');

        selector.addEventListener('change', () => {
            iframeContainers.forEach((container) => {
                container.classList.remove('active');
            });

            const selectedValue = selector.value;
            const targetContainer = document.querySelector(`#iframe-container-${selectedValue}`);
            targetContainer.classList.add('active');
        });