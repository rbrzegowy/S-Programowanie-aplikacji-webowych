{
  // modyfikowanie działania funkcji za pomocą argumentu który jest funkcją (funkcja wyższego rzędu)
  function map<ValueType = unknown, MappedType = unknown>(arr: ValueType[], fn: (x: ValueType) => MappedType) {
    const ret = arr.map(fn)
    return ret
  }

  // Problem - chcemy zmierzyć czas wykonywania funkcji map (jej każdego wywołania)
  // Rozw 1 - błędne, teraz ta funkcja robi map + pomiar czasu.
  function map2<ValueType = unknown, MappedType = unknown>(arr: ValueType[], fn: (x: ValueType) => MappedType) {
    const start = performance.now()
    const ret = arr.map(fn)
    const time = performance.now() - start
    console.log(`Time taken: ${time}ms`)
    return ret
  }
  // Rozwiązanie 2 - funkcja wyższego rzędu
  // Lepiej - mamy funkcję, która jest odpowiedzialna tylko za pomiar czasu, a map pozostaje czystą funkcją.
  // Dodatkowo - możemy użyć tej funkcji do pomiaru czasu dowolnej innej funkcji.
  const measurePerformance = (fn: () => void, context = '') => {
    const start = performance.now()
    const ret = fn()
    const end = performance.now()
    const executionTime = end - start
    console.log(`Czas wykonania ${context}: ${executionTime}`)
    return ret
  }

  const a = [1, 2, 3, 4]
  const aa = map(a, x => String(x))
  const aa2 = map(a, (x: number) => x * 2)
  const aa3 = measurePerformance(() => map(a, x => x + 1), 'map z inkrementacją')
}
