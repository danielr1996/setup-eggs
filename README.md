```yaml
  - name: setup deno
        uses: denolib/setup-deno@v2
        with:
          deno-version: ${{matrix.deno}}
  - name: setup eggs
      uses: danielr1996/setup-eggs@v1
      with:
        token: ${{ secrets.NEST_TOKEN }}
  - name: publish
    run: eggs publish --yes
```