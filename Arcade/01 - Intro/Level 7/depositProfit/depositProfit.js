function depositProfit(deposit, rate, threshold) {
    if (deposit >= threshold) return 0;
    return 1 + depositProfit(
        (deposit * ((100 + rate) / 100)),
        rate,
        threshold
    );
}
​