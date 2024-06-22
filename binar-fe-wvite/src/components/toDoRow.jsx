import React from 'react'

export default function ToDoRow({item, index, handleIsDone}) {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.isDone ? 'sudah selesai' : 'belum selesai'}</td>
            <td>
                <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value={item.isDone}
                    onChange={() => handleIsDone(index)}
                    aria-label="Checkbox for following text input"
                />
            </td>
        </tr>
    )
}
