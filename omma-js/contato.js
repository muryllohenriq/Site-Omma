const btnEnviar = document.querySelector("#btnEnviar");
const inputNome = document.querySelector("#input-nome");

btnEnviar.onclick = () => {
    if (!inputNome.value) {
        return toastr.error("Dados necessários.")
    }

    toastr.success('Dados enviados com sucesso!')
}