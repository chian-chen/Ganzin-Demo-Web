function Download() {
    let filename = "setting.json";
    let datas = [];

    for (let i = 0; i < 5; i++) {
        let prompt = document.getElementById(`prompt-${i + 1}`).value;
        let title = document.getElementById(`data-label-${i + 1}`).value;
        let tableTitle = document.getElementById(`table-${i + 1}`).value;

        let attributes = [];
        for (let j = 0; j < 5; j++) {
            let label = document.getElementById(`data-label-${i + 1}-${j}`).value;
            let type = document.getElementById(`data-type-${i + 1}-${j}`).value;

            if (label && type) {
                attributes.push({
                    label: label,
                    type: type
                });
            }
        }

        datas.push({
            prompt: prompt,
            tableTitle: tableTitle,
            title: title,
            attributes: attributes
        });
    }

    text = JSON.stringify(datas, null, 2);
    console.log(text)

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}




(function($){
    console.log("I'm here!");
    container = document.getElementById("container");

    ScenarioNumber = 5;

    for(i = 0; i < ScenarioNumber; i++){

        Prompt_input = `<div class="field">
                            <label for="prompt-${i + 1}">Prompt${i + 1}</label>
                            <textarea name="prompt-${i + 1}" id="prompt-${i + 1}" placeholder="Enter your prompt" rows="4"></textarea>
                        </div>`;
        DataTable_title = `<div class="field">
                        <label for="table-${i + 1}">Data Table Title${i + 1}</label>
                        <textarea name="table-${i + 1}" id="table-${i + 1}" placeholder="Enter your datatable title" rows="1"></textarea>
                    </div>`;


        DataLabel = `<div class="field quarter">
                    <label for="data-label-${i + 1}">title</label>
                    <input name = "data-label-${i + 1}" type="text" id="data-label-${i + 1}" value="" placeholder="title" maxlength="20"/>
                </div>`;

        DataType = `<div class="field quarter">
                <label for="data-type-${i + 1}">data type</label>
                <select name="data-type-${i + 1}" id="data-type-${i + 1}">
                    <option value="title">title</option>
                </select>
                </div>`;

        Nodes = Prompt_input + DataTable_title + DataLabel + DataType

        for(j = 0; j < 5; j++){
            
            DataLabel = `<div class="field quarter">
                    <label for="data-label-${i + 1}-${j}">Attribute${j + 1}</label>
                    <input name = "data-label-${i + 1}-${j}" type="text" id="data-label-${i + 1}-${j}" value="" placeholder="Attribute${j + 1}" maxlength="20"/>
                </div>`;

            DataType = `<div class="field quarter">
                <label for="data-type-${i + 1}-${j}">data type</label>
                <select name="data-type-${i + 1}-${j}" id="data-type-${i + 1}-${j}">
                    <option value="">-</option>
                    <option value="text">text</option>
                    <option value="number">number</option>
                    <option value="tags">tags</option>
                    <option value="date">date</option>
                </select>
                </div>`;

            Nodes += DataLabel + DataType
        }




        container.innerHTML += Nodes;
    }
}())